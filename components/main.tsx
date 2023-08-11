import * as React from "react";
import { useDropzone } from "react-dropzone";
import styles from "../app/page.module.css";
import { ScrollContext } from "@/lib/scroll-observer";

const MainPage = () => {
  const { scrollY } = React.useContext(ScrollContext);
  const refContaier = React.useRef<HTMLDivElement>(null);

  let progress = 0;

  const { current: elContainer } = refContaier;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const [file, SetFile] = React.useState<any[] | undefined>();
  const [generatedData, SetGeneratedDat] = React.useState<number | undefined>(
    0
  );
  const [generating, SetGenerating] = React.useState(false);

  const Generate = () => {};

  const Clear = () => {
    SetFile(undefined);
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedfile) => {
      const file = acceptedfile[0];
      SetFile(
        acceptedfile.map((file) => {
          return Object.assign(file, {
            preview: URL.createObjectURL(file),
          });
        })
      );
    },
  });
  return (
    <div
      ref={refContaier}
      style={{
        transform: `translateY(-${progress * 30}vh)`,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        backgroundImage:
          "linear-gradient(to bottom right, #6cb2e4, #8bc0e5, #a9cee6, #c8dce7, #e6e9e9)",
      }}
    >
      <div
        {...getRootProps()}
        style={{
          maxHeight: "50vh",
          flex: "1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <span
          style={{
            fontWeight: "bold",
            background: "-webkit-linear-gradient(45deg, #262626, #888888)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: "3em",
            paddingBottom: "20px",
          }}
        >
          Dropzone
        </span>
        {isDragActive ? (
          <div
            style={{
              width: "30vh",
              height: "30vh",
              backgroundColor: "#3B4252",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Drop here!
          </div>
        ) : (
          <div
            style={{
              width: "30vh",
              height: "30vh",
              borderRadius: "10px",
            }}
          >
            <img
              src={file ? file[0].preview : "/images/noProfile.png"}
              alt="Some image"
              loading="lazy"
              style={{
                borderRadius: "10px",
                objectFit: "cover",
                width: "30vh",
                height: "30vh",
              }}
            />
          </div>
        )}
      </div>
      <span
        style={{
          display: "flex",
          paddingBottom: "20px",
          flexDirection: "row",
          gap: "20px",
        }}
      >
        <button className={styles.clear} onClick={Clear}>
          Clear
        </button>
        <button
          className={styles.generate}
          disabled={!generating}
          onClick={Generate}
        >
          Compute
        </button>
      </span>
      <div>
        {file ? (
          <div
            style={{
              fontSize: "2.2em",
              paddingTop: "40px",
              textAlign: "center",
            }}
          >
            We calculated the probability to be <br />
            <br />
            <strong>{generatedData}</strong>
          </div>
        ) : (
          <div
            style={{
              fontSize: "2.2em",
              paddingTop: "40px",
              textAlign: "center",
            }}
          >
            No data generated
          </div>
        )}
      </div>
    </div>
  );
};

export default MainPage;
