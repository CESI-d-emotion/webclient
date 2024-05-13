import {Region, UserRole} from "@/lib/entities/utils.entity";

export interface User {
    id: number | null,
    firstName: string,
    lastName: string,
    email: string,
    regionId: number | null,
    userRoleId: number | null
}

export interface UserFromDB extends User{
    createdAt: Date,
    updatedAt: Date,
    region: Region,
    userRole: UserRole,
    userFollowAssociation: UserFollowAssociation
}

export interface UserFollowAssociation {
    id: number,
    userId: number,
    associationId: number,
    association: {
        id: number,
        name: string
    }
}