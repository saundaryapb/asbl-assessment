import loadable from "../../shared/utils/loadable.tsx";

export default loadable(() => import("./index"), {
   fallback: null,
});
