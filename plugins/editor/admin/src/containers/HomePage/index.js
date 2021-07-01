import React, { useState, useEffect, memo } from "react";
// import "grapesjs/dist/css/grapes.min.css";
// import grapesjs from "grapesjs";
// import gjsPresetWebpage from "grapesjs-preset-webpage";
// import gjsCustomCode from "grapesjs-custom-code";
// import gjsRulers from "grapesjs-rulers";
// import { useParams } from "react-router-dom";
// import { Button } from "@material-ui/core";
// const axios = require("axios").default;
// // import PropTypes from 'prop-types';
// import pluginId from "../../pluginId";

// const HomePage = () => {
//   const [editor, setEditor] = useState(null);
//   const { pageId } = useParams();
//   useEffect(() => {
//     const editor = grapesjs.init({
//       container: "#editor",
//       canvas: {
//         styles: [`editor.css`],
//       },
//       plugins: [gjsPresetWebpage, gjsCustomCode, gjsRulers],
//       pluginOpts: {
//         gjsPresetWebpage: {},
//         gjsCustomCode: {},
//       },
//       cors: {
//         enabled: true,
//         origin: "http://localhost:1337",
//       },
//       storageManager: {
//         type: "strapi-storage",
//         autosave: false,
//         params: {
//           "Access-Control-Allow-Origin": "http://localhost:1337",
//         },
//       },
//     });

//     let SimpleStorage = {};

//     editor.StorageManager.add("strapi-storage", {
//       load(keys, clb, clbErr) {
//         axios.get(`http://localhost:1337/pages/${pageId}`).then((res) => {
//           const serverStore = res.data.Store;
//           if (serverStore) {
//             const result = {};
//             keys.forEach((key) => {
//               const value = serverStore[key];
//               if (value) {
//                 result[key] = value;
//               }
//             });

//             clb(result);
//           }
//         });
//       },

//       store(data, clb, clbErr) {
//         for (let key in data) {
//           SimpleStorage[key] = data[key];
//         }
//         // Might be called inside some async method
//         clb(SimpleStorage);
//       },
//     });

//     const pn = editor.Panels;
//     const panelViews = pn.addPanel({
//       id: "options",
//     });
//     panelViews.get("buttons").add([
//       {
//         active: 1,
//         attributes: {
//           title: "Toggle Rulers",
//         },
//         label: `<svg width="18" viewBox="0 0 16 16"><path d="M0 8a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5A.5.5 0 0 1 0 8z"/><path d="M4 3h8a1 1 0 0 1 1 1v2.5h1V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2.5h1V4a1 1 0 0 1 1-1zM3 9.5H2V12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9.5h-1V12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"/></svg>`,
//         command: "ruler-visibility",
//         id: "ruler-visibility",
//       },
//     ]);

//     editor.load((res) => {});

//     setEditor(editor);
//   }, [pageId]);

//   const handleSave = () => {
//     //Store
//     const saveCallBack = (storage) => {
//       axios
//         .put(`http://localhost:1337/pages/store/${pageId}`, storage)
//         .then((res) => {
//           console.log("Placed Editor State:", res);
//         });
//     };

//     editor.store(saveCallBack);
//   };

//   useEffect(() => {});
//   return (
//     <>
//       <div id="editor"></div>
//       <Button
//         style={{ marginTop: 5, float: "right" }}
//         variant="contained"
//         color="primary"
//         onClick={handleSave}
//       >
//         Save
//       </Button>
//       <Button
//         style={{ marginTop: 5, float: "right", marginRight: 10 }}
//         target="_blank"
//         href="http://localhost:1337/admin/plugins/content-manager/collectionType/application::page.page?page=1&pageSize=10&_sort=id:ASC"
//         variant="contained"
//         color="primary"
//       >
//         Administrator
//       </Button>
//     </>
//   );
// };

const HomePage = () => {
  return (
    <>
      <iframe
        src="http://localhost:3000/editor/brandx-thanks"
        width="1673"
        height="875"
      ></iframe>
    </>
  );
};
export default memo(HomePage);
