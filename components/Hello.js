import { useSelector, useDispatch } from "react-redux";
import { getData, getGenericDataState } from "@/slices/GenericSlice";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hello() {
  const dispatch = useDispatch();

  const [renderData, setRenderData] = useState("");

  const dataApi = useSelector(getGenericDataState);

  useEffect(() => {
    if (dataApi?.genric?.title?.length > 0) {
      setRenderData(() => {
        return (
          <p
            style={{
              borderRadius: "10px",
              boxShadow: "5px 5px 5px #e8e8e8 ",
              margin: "50px auto 0px auto",
              backgroundColor: "#ddc9b4",
              width: "50%",
              padding: "10px",
              textAlign: "center",
            }}
          >
            Title : {dataApi?.genric?.title}
          </p>
        );
      });
    }
  }, [dataApi?.genric?.title?.length]);

  function fetchData() {
    dispatch(getData());
  }

  return (
    <>
      <div
        style={{
          borderBottom: "1px solid #e8e8e8",
          borderRadius: "5px",
          boxShadow: "5px 5px 5px #e8e8e8 ",
        }}
      >
        <Image
          style={{ margin: "0px" }}
          src="/logo.svg"
          width={112}
          height={60}
          alt="Logo"
        />
      </div>
      <div
        style={{
          paddingTop: "2vh",
          margin:"auto",
          width: "60%",
        }}
      >
        <div
          style={{
            display: "flex ",
            padding: "20px",
            border: "1px solid #e8e8e8",
            borderRadius: "5px",
            justifyContent: "center",
            boxShadow: "5px 5px 5px #e8e8e8 ",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-alert-circle pds-alert-type-icon"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          <div style={{ padding: "0px 0px 0px 20px" }}>
            <span>Good news: We're going to make better UI soon.</span>
          </div>
        </div>
      </div>
      {!renderData ? (
        <div
          style={{
            marginLeft: "40%",
            marginRight: "40%",
            marginTop: "10px",
            width: "20%",
          }}
        >
          <button
            style={{
              backgroundColor: "skyblue",
              borderColor: "#e8e8e8",
              borderRadius: "10px",
            }}
            onClick={fetchData}
          >
            Click To Start
          </button>
        </div>
      ) : (
        renderData
      )}
    </>
  );
}
