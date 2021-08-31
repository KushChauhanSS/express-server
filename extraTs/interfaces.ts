interface Permission {
    [key: string]: {
        all: string[];
        read: string[];
        write: string[];
        delete: string[];
    };
}

interface UserType {
    traineeEmail: string;
    reviewerEmail: string;
}