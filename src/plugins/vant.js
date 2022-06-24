import {
    Button,
    Empty,
    Form,
    Field,
    Cell,
    CellGroup,
    Icon,
    NavBar,
    NoticeBar,
    Area,
    Popup,
    Image as VanImage,
    RadioGroup,
    Radio,
    CountDown,
    Checkbox,
    CheckboxGroup,
} from "vant";

export default {
    install(Vue) {
        Vue.use(Button);
        Vue.use(Empty);
        Vue.use(Form);
        Vue.use(Field);
        Vue.use(Cell);
        Vue.use(CellGroup);
        Vue.use(Icon);
        Vue.use(NavBar);
        Vue.use(NoticeBar);
        Vue.use(Area);
        Vue.use(Popup);
        Vue.use(VanImage);
        Vue.use(RadioGroup);
        Vue.use(Radio);
        Vue.use(CountDown);
        Vue.use(Checkbox);
        Vue.use(CheckboxGroup);
    },
};
