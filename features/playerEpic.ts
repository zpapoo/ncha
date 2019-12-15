import { PayloadAction } from '@reduxjs/toolkit'
import { ActionsObservable, Epic, ofType } from 'redux-observable'
import { tap } from 'rxjs/operators'

import { playerActionName, playerActions } from './player'
// const loginEpic: Epic = (action: ActionsObservable<LoginAction>) =>
//   action.pipe(
//     ofType(REQUEST),
//     switchMap((action: LoginAction) =>
//       Application.service.requestLogin(action.account).pipe(
//         map((accountInfo: CMUserInfo) => {
//           storage.set(STORAGE_KEY.ACCOUNT, accountInfo);

//           return accountInfo.isFirstLogin
//             ? gotoOtherRoute({
//               target: MFCMS_SITEMAP.SET_NEW_PASSWORD,
//             })
//             : requestLoginSuccess(accountInfo);
//         }),
//         catchError((error: AjaxError) => of(requestLoginError({
//           statusCode: error.status,
//         }))),
//       ),
//     ),
//   );
export const playerEpic: Epic = (
  action: ActionsObservable<PayloadAction<any>>
) => (
  action.pipe(
    ofType(playerActionName),
    tap(() => console.log(playerActionName))
  )
)