import React from "react";
import "./DashboardBody.css";
import { useSelector } from "react-redux";
import useGetSites from "../../Hooks/useGetSites";
import { BeatLoader } from "react-spinners";
import { FaSearch } from "react-icons/fa";
import useDelete from "../../Hooks/useDelete";

function DashboardBody() {
  const { sitesLoading, getAllSites } = useGetSites();
  const [search, setSearch] = React.useState("");
  const { deleteData, deleteLoading } = useDelete();
  React.useEffect(() => {
    getAllSites();
  }, []);

  const deleteSite = async (id) => {
    if (window.confirm("Are you sure you want to delete this site?")) {
      deleteData(id);
    }
    getAllSites();
  };
  let sites = useSelector((state) => state.site);
  sites = sites.site;

  if (sites === null) sites = [];
  return (
    <div className="dashboard-body">
      <div className="dashboard-header">
        <h1>Site status</h1>
        <div className="search">
          <FaSearch className="icon-search" />
          <input
            type="text"
            placeholder="Search..."
            className="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {sitesLoading && <BeatLoader />}

      <div className="site-items">
        {sites?.data?.length > 0 && sites?.data[0]?.sites?.length > 0 ? (
          sites?.data[0]?.sites
            ?.filter(({ url }) => {
              return url.indexOf(search) >= 0;
            })
            .map((site) => (
              <div className="site-item" key={site?._id}>
                <p className="website-name">{site?.url}</p>
                <div className="status">
                  <img
                    src={site?.status === "up" ? "/green.png" : "/red.png"}
                    alt={site?.status}
                  />
                  <p>{site?.status}</p>
                </div>
                <p className="last-checked">
                  {site?.status} since:{" "}
                  {new Date(site?.timestamp).toLocaleString()}
                </p>
                <button
                  onClick={() => deleteSite(site?._id)}
                  disabled={deleteLoading}
                >
                  {deleteLoading ? <BeatLoader /> : "Delete"}
                </button>
              </div>
            ))
        ) : (
          <p className="no-sites">No sites added</p>
        )}
      </div>
    </div>
  );
}
export default DashboardBody;
