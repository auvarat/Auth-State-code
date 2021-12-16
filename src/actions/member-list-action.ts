import { Person } from './../app/Person';
export const MEMBER_LIST_REQUEST = 'member list request';
export const MEMBER_LIST_SUCCESS = 'member list success';
export const MEMBER_LIST_ERROR = 'member list ERROR';
export const MEMBER_DELETE = 'MEMBER_DELETE';
export const MEMBER_UPDATE = 'MEMBER_UPDATE';

export class MemberListRequestAction {
    readonly type = MEMBER_LIST_REQUEST;
}
export class MemberDeleteAction {
    readonly type = MEMBER_DELETE;
    constructor(public payload?: { _id: String }) {
    }
}
export class MemberUpdateAction {
    readonly type = MEMBER_UPDATE;
    constructor(public payload?: { _id: String, data: Person }) {
    }
}
export class MemberListErrorAction {
    readonly type = MEMBER_LIST_ERROR;
}
export class MemberListSuccessAction {
    readonly type = MEMBER_LIST_SUCCESS;
    constructor(public payload?: { data: Person[] }) {
    }
}