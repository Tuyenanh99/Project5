// javaSript for search
document.addEventListener('DOMContentLoaded', function () {
	 UpdateSoLuong();
    var nuttk = document.getElementById('nuttk');
    nuttk.addEventListener('click', Timkiem );
    //xủ ly tu dong danh so thu tu
    UpdateSTT();
    var nenden = document.querySelector('.nenden');
    //xu ly khi click them   
    var nutthem = document.querySelector('.nut_them');
    var form_them = document.querySelector('.modalthem');
    var nut_close = document.querySelectorAll('.close');
    var nut_huy = document.querySelectorAll('.btn_huy');
    var nut_them = document.querySelector('.nutthem');
    var nutthem = document.querySelector('.btn_them');
    nut_them.addEventListener('click', function () {
        nenden.classList.add('ndhr');
        form_them.classList.add('themhr');
    })
    nutthem.addEventListener('click', Them);
    //thong bao them thanh cong
    var thongbaothem = document.querySelector('.thongbaothem');
    var nutx_thongbaot = thongbaothem.querySelector('i');
    nutx_thongbaot.addEventListener('click', function () {
        thongbaothem.classList.remove('tbhr');
    })
    //ket thuc phan xu ly them
    //xu ly phan sua
    var nutsuas = document.getElementsByClassName('sua');
	var form_sua = document.querySelector('.modalsua');
	var nut_sua = document.querySelector('.btn_sua');
	for (var i = 0; i < nutsuas.length; i++) {
        var nut_suas = nutsuas[i];
        nut_suas.addEventListener('click', ClickUpdate);
    }
    nut_sua.addEventListener('click', Update);
     var thongbaosua = document.querySelector('.thongbaosua');
      var nutx_thongbaos = thongbaosua.querySelector('i');
    	nutx_thongbaos.addEventListener('click', function () {
        thongbaosua.classList.remove('tbhr');
    })
    //dong modal
    for (var i = 0; i < nut_close.length; i++) {
        nut_close[i].addEventListener('click', function () {
            nenden.classList.remove('ndhr');
            form_sua.classList.remove('suahr');
            form_them.classList.remove('themhr');
        })
    }
    for (var i = 0; i < nut_huy.length; i++) {
        nut_huy[i].addEventListener('click', function () {
        	nenden.classList.remove('ndhr');
            form_sua.classList.remove('suahr');
            form_them.classList.remove('themhr');
            
        })
    }
    //xu ly phan xoa
    var nutxoas = document.getElementsByClassName('xoa');
    for (var i = 0; i < nutxoas.length; i++) {
        var nut_xoas = nutxoas[i];
        nut_xoas.addEventListener('click', Delete);
    }
    var thongbaoxoa = document.querySelector('.thongbaoxoa');
    var nutx_thongbaox = thongbaoxoa.querySelector('i');
    nutx_thongbaox.addEventListener('click', function () {
        thongbaoxoa.classList.remove('tbhr');
    })
    nenden.addEventListener('click', function () {
        nenden.classList.remove('ndhr');
        form_sua.classList.remove('suahr');
        form_them.classList.remove('themhr');
    })
    Tudongxoatb();
})
//ham update thong ke so luong san pham
function UpdateSoLuong() {
    var sosanpham = document.querySelector('.slsp');
    var all_item = document.querySelector('.listitem');
    var all_tr = all_item.querySelectorAll('tr');
    sosanpham.innerText = all_tr.length;
}
//ham tim kiem
function Timkiem(event){
	var nuttk=event.target;
	var otimkiem=document.getElementById('otimkiem');
	var itemss=document.querySelector('.listitem');
	var listtr = itemss.querySelectorAll('tr');
	var str_timkiem = otimkiem.value;
    for(var i = 0; i < listtr.length; i++) {
        var listtd = listtr[i].querySelectorAll('td');
        var tmp = listtd[2].innerText;//tên sp nằm ở td thứ 3
        if(tmp.indexOf(str_timkiem) < 0) {
            listtr[i].classList.add('andi');//nếu không tìm  thấy thì thêm class ẩn đi 
        }
    }
    otimkiem.addEventListener('change', function() {
        if(otimkiem.value == '') {
            for(var i = 0; i < listtr.length; i++) {
                listtr[i].classList.remove('andi');
            }
        }
    })
}
//ham xu ly tu dong danh so thu tu
function UpdateSTT() {
    var items = document.querySelectorAll('tbody tr');
    for (var i = 0; i < items.length; i++) {
        var tdstts = items[i].querySelectorAll('td');
        tdstts[0].innerHTML = i + 1;
    }
}
//ham them
function Them() {
    var nenden = document.querySelector('.nenden');
    var form_them = document.querySelector('.modalthem');
    //xử lý phần thông báo
    var thongbaothem = document.querySelector('.thongbaothem');
    var txtMa = document.getElementById('maThem').value;
    var txtTen = document.getElementById('tenThem').value;
    var txtMota=document.getElementById('giaThem').value;
    var listitem = document.querySelector('.listitem');
    var item_Them = document.createElement('tr');//thêm dữ liệu vào hàng mới
    var content_item = `
        <td></td>
        <td>${txtMa}</td> 
        <td>${txtTen}</td>
        <td>${txtMota}</td>
        <td>
        <a href="#" class="sua"><span class="fa fa-edit"></span></a>
        <a href="#" class="xoa"><span class="fa fa-trash"></a>
        </td>`;//dinh dang cho tr moi
    item_Them.innerHTML = content_item;//them
    listitem.append(item_Them);
    nenden.classList.remove('ndhr');
    form_them.classList.remove('themhr');
    UpdateSTT();
    thongbaothem.classList.add('tbhr');
    item_Them.querySelector('.sua').addEventListener('click', ClickUpdate);
    item_Them.querySelector('.xoa').addEventListener('click', Delete);
    UpdateSoLuong();  
}
//sua 
function ClickUpdate(event) {
    var nut_suas = event.target;
    var nenden = document.querySelector('.nenden');
    var form_sua = document.querySelector('.modalsua');
    nenden.classList.add('ndhr');
    form_sua.classList.add('suahr');
 	 Reset();
    var tr = nut_suas.parentElement.parentElement.parentElement;
    var txtMa = document.getElementById('maSua');
    var txtTen = document.getElementById('tenSua');
    var txtMota= document.getElementById('giaSua');
    var td = tr.querySelectorAll('td');
    txtMa.value = td[1].innerText;
    txtTen.value = td[2].innerText;
    txtMota.value = td[3].innerText;
    tr.classList.add('it_update');

}
function Update() {
    var nenden = document.querySelector('.nenden');
    var form_sua = document.querySelector('.modalsua');
    var tr_update = document.querySelector('.it_update');
    var td_update = tr_update.querySelectorAll('td');
    var thongbaosua = document.querySelector('.thongbaosua');
    var txtMa = document.getElementById('maSua').value;
    var txtTen = document.getElementById('tenSua').value;
    var txtMota = document.getElementById('giaSua').value;
     td_update[1].innerText = txtMa;
    td_update[2].innerText = txtTen; 
     td_update[3].innerText = txtMota; 
    nenden.classList.remove('ndhr');
   form_sua.classList.remove('suahr');
    thongbaosua.classList.add('tbhr');
}
function Reset() {
    var nutsuas = document.getElementsByClassName('sua');
    for (var i = 0; i < nutsuas.length; i++) {
        var tr = nutsuas[i].parentElement.parentElement;
        tr.classList.remove('it_update');
    }
}
//ham xoa
function Delete(event) {
    var nut_xoas = event.target;
    var thongbao = confirm('Bạn có thực sự muốn xóa ?');
    var thongbaoxoa = document.querySelector('.thongbaoxoa');
    if (thongbao) {
        this.parentElement.parentElement.remove();
        thongbaoxoa.classList.add('tbhr');
        UpdateSoLuong();
    }
    else
   		return;
    UpdateSTT();
}
//ham xoa
function Tudongxoatb() {
    var thoigian = setInterval(function () {
        var thongbaothem = document.querySelector('.thongbaothem');
        var thongbaosua = document.querySelector('.thongbaosua');
        var thongbaoxoa = document.querySelector('.thongbaoxoa');
        thongbaothem.classList.remove('tbhr');
        thongbaosua.classList.remove('tbhr');
        thongbaoxoa.classList.remove('tbhr');
    }, 4000)
}
