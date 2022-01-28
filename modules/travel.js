//both works for default export

import roamio from "./game";
// import games from "./game";

console.log(roamio.name);

// need to specify for multiple export
import { pizzerio } from "./pizza";
import { dis, value } from "./pizza";

//alias
import { dis as distrack } from "./pizza";
