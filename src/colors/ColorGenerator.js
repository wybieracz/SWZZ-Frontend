import {
    Turquoise,
    TurquoiseDark,
    RaspberryLight,
    Raspberry,
    GreenLight,
    Green,
    CyjanLight,
    Cyjan,
    Orange,
    OrangeDark,
    PinkLight,
    Pink,
    YellowLight,
    Yellow,
    Purple,
    PurpleDark,
    BottleGreen,
    BottleGreenDark,
    GreyDark,
    GreyNight
} from "./Colors.js";

const colorGenerator = (user) => {

    if(!user || user.userId === "0") return [GreyDark, GreyNight];
    const result = user.userId.charCodeAt(0) % 10 + user.userId.charCodeAt(24) % 10 + user.userId.charCodeAt(35) % 10;

    if (result < 3) return [Turquoise, TurquoiseDark];
    else if (result < 9) return [RaspberryLight, Raspberry];
    else if (result < 12) return [GreenLight, Green];
    else if (result < 15) return [CyjanLight, Cyjan];
    else if (result < 18) return [Orange, OrangeDark];
    else if (result < 21) return [PinkLight, Pink];
    else if (result < 24) return [YellowLight, Yellow];
    else if (result < 27) return [Purple, PurpleDark];
    else return [BottleGreen, BottleGreenDark];
};

export default colorGenerator;