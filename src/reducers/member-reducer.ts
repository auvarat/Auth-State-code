import { MEMBER_LIST_SUCCESS, MEMBER_LIST_ERROR, MEMBER_DELETE, MEMBER_UPDATE } from './../actions/member-list-action';

import { MEMBER_LIST_REQUEST } from 'src/actions/member-list-action';
import { Action } from './../actions/index';
import { Person } from './../app/Person';
export interface MemberReducerState {

    loading: boolean;
    loaded: boolean;
    error: boolean;
    members: Person[];

}

const initialState: MemberReducerState = {
    loading: false,
    loaded: false,
    error: false,
    members: []
}

export function MemberReducer(state = initialState, action: Action): MemberReducerState {

    switch (action.type) {
        case MEMBER_LIST_REQUEST: {
            return { ...state, loading: true }
        }
        case MEMBER_DELETE: {
            const members = state.members.filter(data => data._id == action.payload._id);
            return { ...state, ...{ members } }
        }
        case MEMBER_UPDATE: {
            const updateMember = state.members.concat(action.payload.data);
            // const updateMember = members.concat(action.payload.data);
            return { ...state, ...{ updateMember } }
        }
        case MEMBER_LIST_ERROR: {
            return { ...state, error: true }
        }
        case MEMBER_LIST_SUCCESS: {

            const updatedMemebers = state.members.concat(action.payload.data);
            return { ...state, loading: false, loaded: true, members: updatedMemebers };
        }
        default: {
            return state;
        }
    }

}



//selectors

export const getloading = (state: MemberReducerState) => state.loading;
export const getloaded = (state: MemberReducerState) => state.loaded;
export const getMembers = (state: MemberReducerState) => state.members;
export const getMembersError = (state: MemberReducerState) => state.error;

