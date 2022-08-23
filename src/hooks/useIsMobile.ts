import { useEffect, useState } from "react";

const useIsMobile = (breakPoint?: number) => {
    const [isMobile, setIsMobile] = useState<boolean>(
        window.innerWidth <= (breakPoint ? breakPoint : 768) ? true : false
    );

    useEffect(() => {
        validate();
        window.addEventListener("resize", validate);

        return () => window.removeEventListener("resize", validate);
    }, []);

    const validate = () => setIsMobile(window.innerWidth <= (breakPoint ? breakPoint : 768) ? true : false);

    return isMobile;
};

export default useIsMobile;
