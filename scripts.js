async function image(val) {
    var c1 = document.getElementById(val);
    if (c1.checked) {
        c1.checked = false
    } else {
        c1.checked = true
    }
}
async function check() {
    var i1 = document.getElementById('i1');
    var i2 = document.getElementById('i2');
    var i3 = document.getElementById('i3');
    var i4 = document.getElementById('i4');
    var i5 = document.getElementById('i5');
    var i6 = document.getElementById('i6');
    var i7 = document.getElementById('i7');
    var i8 = document.getElementById('i8');
    var i9 = document.getElementById('i9');
    var i10 = document.getElementById('i10');
    var i11 = document.getElementById('i11');
    var i12 = document.getElementById('i12');
    var i13 = document.getElementById('i13');
    var i14 = document.getElementById('i14');
    var i15 = document.getElementById('i15');
    var i16 = document.getElementById('i16');
    var c1 = document.getElementById('myCheckbox1');
    var c2 = document.getElementById('myCheckbox2');
    var c3 = document.getElementById('myCheckbox3');
    var c4 = document.getElementById('myCheckbox4');
    var c5 = document.getElementById('myCheckbox5');
    var c6 = document.getElementById('myCheckbox6');
    var c7 = document.getElementById('myCheckbox7');
    var c8 = document.getElementById('myCheckbox8');
    var c9 = document.getElementById('myCheckbox9');
    var c10 = document.getElementById('myCheckbox10');
    var c11 = document.getElementById('myCheckbox11');
    var c12 = document.getElementById('myCheckbox12');
    var c13 = document.getElementById('myCheckbox13');
    var c14 = document.getElementById('myCheckbox14');
    var c15 = document.getElementById('myCheckbox15');
    var c16 = document.getElementById('myCheckbox16');
    const items = ["images/881778101003120652 (1).png", "images/834535415628562442 (1).png", "images/834538140450160661.png", "images/834541394987057242.png", "images/834541395074613248.png", "images/834541395749371916.png", "images/834541395930251336.png"];
    if (c1.checked) {
        i1.src = items[Math.floor(Math.random() * items.length)];
        c1.checked = false
    }
    if (c2.checked) {
        i2.src = items[Math.floor(Math.random() * items.length)];
        c2.checked = false
    }
    if (c3.checked) {
        i3.src = items[Math.floor(Math.random() * items.length)];
        c3.checked = false
    }
    if (c4.checked) {
        i4.src = items[Math.floor(Math.random() * items.length)];
        c4.checked = false
    }
    if (c5.checked) {
        i5.src = items[Math.floor(Math.random() * items.length)];
        c5.checked = false
    }
    if (c6.checked) {
        i6.src = items[Math.floor(Math.random() * items.length)];
        c6.checked = false
    }
    if (c7.checked) {
        i7.src = items[Math.floor(Math.random() * items.length)];
        c7.checked = false
    }
    if (c8.checked) {
        i8.src = items[Math.floor(Math.random() * items.length)];
        c8.checked = false
    }
    if (c9.checked) {
        i9.src = items[Math.floor(Math.random() * items.length)];
        c9.checked = false
    }
    if (c10.checked) {
        i10.src = items[Math.floor(Math.random() * items.length)];
        c10.checked = false
    }
    if (c11.checked) {
        i11.src = items[Math.floor(Math.random() * items.length)];
        c11.checked = false
    }
    if (c12.checked) {
        i12.src = items[Math.floor(Math.random() * items.length)];
        c12.checked = false
    }
    if (c13.checked) {
        i13.src = items[Math.floor(Math.random() * items.length)];
        c13.checked = false
    }
    if (c14.checked) {
        i14.src = items[Math.floor(Math.random() * items.length)];
        c14.checked = false
    }
    if (c15.checked) {
        i15.src = items[Math.floor(Math.random() * items.length)];
        c15.checked = false
    }
    if (c16.checked) {
        i16.src = items[Math.floor(Math.random() * items.length)];
        c16.checked = false
    }

}