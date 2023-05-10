import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { getWindow } from 'mirador/dist/es/src/state/selectors/getters';
import { getCatalog } from 'mirador/dist/es/src/state/selectors';
import ManifestState from '../components/ManifestState';


const mapStateToProps = (state, { windowId }) => {
    const windowManifestId = getWindow(state, {windowId}).manifestId;
    const catalog = getCatalog(state);
    const manifests = [];
    Object.entries(catalog).forEach(([key, value]) => {
        manifests.push(value.manifestId);
    })

    return {
        manifestState: manifests.includes(windowManifestId)
    }
};

const enhance = compose(
    withTranslation(),
    connect(mapStateToProps),
);

export default enhance(ManifestState);
