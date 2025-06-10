import { apiInitializer } from 'discourse/lib/api';
import LatestPoll from '../components/latest-poll';

export default apiInitializer('1.14.0', (api) => {
    api.renderInOutlet(settings.plugin_outlet.trim(), LatestPoll);
});