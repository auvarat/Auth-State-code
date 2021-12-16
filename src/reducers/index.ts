import { ActionReducerMap, createSelector } from '@ngrx/store';
import * as fromMember from './member-reducer';


export interface RootReducerState {
    members: fromMember.MemberReducerState
}

export const rootReducer: ActionReducerMap<RootReducerState> = {
    members: fromMember.MemberReducer
}

export const getMemberState = (state: RootReducerState) => state.members;

export const getMemberLoaded = createSelector(getMemberState, fromMember.getloaded);
export const getMemberLoading = createSelector(getMemberState, fromMember.getloading);
export const getMember = createSelector(getMemberState, fromMember.getMembers);
export const getMemberError = createSelector(getMemberState, fromMember.getMembersError);
