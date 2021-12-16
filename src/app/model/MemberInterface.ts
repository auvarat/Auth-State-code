

export interface Member {
    success?: boolean;
    message?: string;
    data?: [MemberDetails];
}
export interface MemberDetails {
    _id?: String;
    name?: String;
    email?: String;
    address?: String;
    country?: String;
    dob?: Date;
    image?: [String];
    adminId?: String;
    createdAt?: Date;
    updatedAt?: Date;
}