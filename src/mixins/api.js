import Authentication from '../services/api/resources/authentication'
import UserProfile from '../services/api/resources/user-profile'
import EventsService from '../services/api/resources/events-service'
import SubscriptionsService from '../services/api/resources/subscriptions-service'

export const authentication  = new Authentication();
export const userProfile = new UserProfile();
export const eventsService = new EventsService();
export const subscriptionsService = new SubscriptionsService();