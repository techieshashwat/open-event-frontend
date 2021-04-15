import ApplicationAdapter from './application';
import ENV from 'open-event-frontend/config/environment';

export default ApplicationAdapter.extend({

  urlForQueryRecord(query) {
    if (query  && query.eventIdentifier) {
      return `${ENV.APP.apiHost}/v1/events/${query.eventIdentifier}/access-codes/${query.code}`;
    } else {
      return this._super(...arguments);
    }
  }
});
