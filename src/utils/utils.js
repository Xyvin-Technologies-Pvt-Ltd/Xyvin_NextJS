

export const animationCreate = () => {
    if (typeof window !== "undefined") {
        import("wowjs").then((module) => {
            const WOW = module.default;
            new WOW.WOW({ live: false }).init()
        });
    }
};

