function trinary_widget_create(
    el,
    lbl_yes,
    lbl_nutral,
    lbl_no
) {
    if (lbl_yes === undefined) lbl_yes = "Yes";
    if (lbl_nutral === undefined) lbl_nutral = "...";
    if (lbl_no === undefined) lbl_no = "No";

    const el_select = el.querySelector('SELECT');
    el_select.style.display = 'none';

    el_slider_container = document.createElement('div');
    el_slider_container.classList.add("trinary__widget_container");
    const el_button_no = document.createElement('button');
    el_button_no.classList.add("trinary__option_no");
    el_button_no.innerText = lbl_no;
    const el_button_nutral = document.createElement('button');
    el_button_nutral.classList.add("trinary__option_nutral")
    el_button_nutral.innerText = lbl_nutral;
    const el_button_yes = document.createElement('button');
    el_button_yes.classList.add("trinary__option_yes");
    el_button_yes.innerText = lbl_yes;

    el.appendChild(el_slider_container);
    el_slider_container.appendChild(el_button_no);
    el_slider_container.appendChild(el_button_nutral);
    el_slider_container.appendChild(el_button_yes);

    el_select.addEventListener('change', function(e){
        set_state(el_select.options[el_select.selectedIndex].value);
    });

    el_button_no.addEventListener('click', function(e){
        el_select.value = "no";
        set_state("no");
    });
    el_button_nutral.addEventListener('click', function(e){
        el_select.value = "";
        set_state();
    });
    el_button_yes.addEventListener('click', function(e){
        el_select.value = "yes";
        set_state("yes");
    });

    function load() {
        set_state(el_select.options[el_select.selectedIndex].value);
    }

    function set_state(state) {
        switch(state) {
            case 'yes':
                el_button_yes.classList.add("trinary__button_selected_yes");
                el_button_no.classList.remove("trinary__button_selected_no");
                el_button_nutral.classList.remove("trinary__button_selected_undefined");
                break;
            case 'no':
                el_button_no.classList.add("trinary__button_selected_no");
                el_button_yes.classList.remove("trinary__button_selected_yes");
                el_button_nutral.classList.remove("trinary__button_selected_undefined");
                break;
            default:
                el_button_yes.classList.remove("trinary__button_selected_yes");
                el_button_no.classList.remove("trinary__button_selected_no");
                el_button_nutral.classList.add("trinary__button_selected_undefined");
        }
    }

    this.reload = function() {
        load();
    }

    load();

    el.widget = this;
    return this;
}