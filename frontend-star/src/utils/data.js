 export const userQuery = (userId) => {
        const query = `*[_type == "user" && _id == '${userId}']`;
        return query;
    };
    
    export const userCreatedPinsQuery = (userId) => {
        const query = `*[ _type == 'pin' && userId == '${userId}'] | order(_createdAt desc){
        image{
            asset->{
            url
            }
        },
        _id,
        destination,
        postedBy->{
            _id,
            userName,
            image
        },
        save[]{
            postedBy->{
            _id,
            userName,
            image
            },
        },
        }`;
        return query;
    };
    
    export const userSavedPinsQuery = (userId) => {
        const query = `*[_type == 'pin' && '${userId}' in save[].userId ] | order(_createdAt desc) {
        image{
            asset->{
            url
            }
        },
        _id,
        destination,
        postedBy->{
            _id,
            userName,
            image
        },
        save[]{
            postedBy->{
            _id,
            userName,
            image
            },
        },
        }`;
        return query;
    };