import React from "react";
import "./DashboardBody.css";
import { useSelector } from "react-redux";
import useGetSites from "../../Hooks/useGetSites";

function DashboardBody() {
  const { sitesLoading, getAllSites } = useGetSites();
  React.useEffect(() => {
    getAllSites();
  }, []);
  let sites = useSelector((state) => state.site);
  sites = sites.site;

  if (sites === null) sites = [];

  return (
    <div className="dashboard-body">
      <h1>Site status</h1>

      <div className="site-items">
        {sites?.data?.length > 0 &&
          sites?.data[0]?.sites?.map(
            (site) => (
              console.log(site),
              (
                <div className="site-item" key={site?._id}>
                  <p className="website-name">{site?.url}</p>
                  <div className="status">
                    <img
                      src={site?.status === "up" ? "/green.png" : "/red.png"}
                      alt={site?.status}
                    />
                    <p>{site?.status}</p>
                  </div>
                  <button>Delete</button>
                </div>
              )
            )
          )}
        {sites.length === null && <p>No sites added</p>}
      </div>
    </div>
  );
}
export default DashboardBody;
