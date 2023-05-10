import ManifestState from "./containers/ManifestState";
import translations from "./locales";

export default [{
  component: ManifestState,
  mode: 'add',
  target: 'WindowTopBarPluginArea',
  config: {
    translations,
  }
}]
