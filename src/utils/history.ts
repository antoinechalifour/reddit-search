import { createBrowserHistory } from "history";
import { Observable } from "rxjs";

export const history = createBrowserHistory();

export function observeHistory() {
  return new Observable(subscriber => {
    history.listen(location => subscriber.next(location));
    subscriber.next(history.location);
  });
}
