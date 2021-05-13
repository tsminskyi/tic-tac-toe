const isEmpty = (value) => {

    switch (typeof value) {

        case "string": {

            if (value) {
                if (value.trim().length > 0) return false;
                return true;
            }
            return true;
        }

        case "undefined": return true;

        case "object": {

            if (Array.isArray(value)) {
                if (value.length > 0) return false
            }
            return true;

        }


        default:
            break;
    }

}

export default isEmpty;