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

    if(!user || user.userId === 0) return[GreyDark, GreyNight];

    const result = user.name.charCodeAt(0) + user.surname.charCodeAt(0);

    if (result <= 135) return [Turquoise, TurquoiseDark];
    else if (result > 135 && result <= 141) return [RaspberryLight, Raspberry];
    else if (result > 141 && result <= 147) return [GreenLight, Green];
    else if (result > 147 && result <= 153) return [CyjanLight, Cyjan];
    else if (result > 153 && result <= 159) return [Orange, OrangeDark];
    else if (result > 159 && result <= 165) return [PinkLight, Pink];
    else if (result > 165 && result <= 171) return [YellowLight, Yellow];
    else if (result > 171 && result <= 175) return [Purple, PurpleDark];
    else if (result > 176) return [BottleGreen, BottleGreenDark];
};

export default colorGenerator;