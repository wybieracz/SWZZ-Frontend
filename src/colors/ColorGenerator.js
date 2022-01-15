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

    if(!user || user.userId === "0") return[GreyDark, GreyNight];
    const result = user.name.charCodeAt(0) + user.surname.charCodeAt(0) + parseInt(user.userId[0] * 10);

    if (result <= 140) return [Turquoise, TurquoiseDark];
    else if (result > 155 && result <= 170) return [RaspberryLight, Raspberry];
    else if (result > 170 && result <= 185) return [GreenLight, Green];
    else if (result > 185 && result <= 200) return [CyjanLight, Cyjan];
    else if (result > 200 && result <= 215) return [Orange, OrangeDark];
    else if (result > 215 && result <= 230) return [PinkLight, Pink];
    else if (result > 230 && result <= 245) return [YellowLight, Yellow];
    else if (result > 245 && result <= 260) return [Purple, PurpleDark];
    else if (result > 260) return [BottleGreen, BottleGreenDark];
};

export default colorGenerator;