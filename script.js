/* 
Simulador de compra y venta de comics. Estarán disponibles 10 comics, cada uno tendrá un precio. 
La persona podrá agregar al carro de compras todos los comics que quiera. Cada vez que agregue,
aparecerá en alert una lista con su carrito hasta el momento. En caso de arrepentirse de agregar,
tiene la opción de eliminar un item.
En caso de pagar en efectivo se le hará un 10% de descuento sobre el monto total.
*/
let misComics = ""
let costo = 0
let reset;
while (true) {
    let ingreso = prompt("Bienvenidos a Comic Store! Tenemos en stock una lista de 10 comics disponibles. Si desea ver nuestro catálogo ingrese 'si/no'")
    if (ingreso == "si") {
        while (reset != "no") {
            let compra = parseInt(prompt("1) Amazing Spider-Man by Nick Spencer Vol. 15 $1200\n2) The Amazing Spider-Man (2018) #80 $2200\n3) Man Without Fear (2019) #3 $1150\n4) Daredevil (2019) #33 4 $3300\n5) Tony Stark: Iron Man (2018) #15 $1500\n6) Iron Man (2020) #14 6 $5200\n7) Batman: The Killing Joke - The Deluxe Edition 7 $3400\n8) The Dark Knight Returns 30th Anniversary Edition $1700\n9) The Flash: Rebirth $4200\n10) The Flash Vol. 1: Lightning Strikes Twice $1000\nSi desea agregar uno de los comics ingrese su número correspondiente."))
            if (compra != "1" && compra != "2" && compra != "3" && compra != "4" && compra != "5" && compra != "6" && compra != "7" && compra != "8" && compra != "9" && compra != "10") {
                alert("Debe ingresar un valor correcto")
                continue
            }
            switch (compra) {
                case 1:
                    misComics += "Amazing Spider-Man by Nick Spencer Vol. 15\n";
                    costo += 1200
                    break;
                case 2:
                    misComics += "The Amazing Spider-Man (2018) #80\n";
                    costo += 2200
                    break;
                case 3:
                    misComics += "Man Without Fear (2019) #3\n";
                    costo += 1150
                    break;
                case 4:
                    misComics += "Daredevil (2019) #33\n";
                    costo += 3300
                    break;
                case 5:
                    misComics += "Tony Stark: Iron Man (2018) #15\n";
                    costo += 1500
                    break;
                case 6:
                    misComics += "Iron Man (2020) #14\n";
                    costo += 5200
                    break;
                case 7:
                    misComics += "Batman: The Killing Joke - The Deluxe Edition\n";
                    costo += 3400
                    break;
                case 8:
                    misComics += "The Dark Knight Returns 30th Anniversary Edition\n";
                    costo += 1700
                    break;
                case 9:
                    misComics += "The Flash: Rebirth\n";
                    costo += 4200
                    break;
                case 10:
                    misComics += "The Flash Vol. 1: Lightning Strikes Twice\n";
                    costo += 1000
                    break;
            }
            reset = prompt(`Su carrito incluye:\n${misComics}Desea seguir comprando? (si/no)`)
        }
        alert(`Su compra final es de:\n${misComics}\nHa gastado $${costo}`)
        break
    } else if (ingreso == "no") {
        alert("Gracias por visitarnos. Le dejamos nuestro teléfono de contacto por si se arrepiente. Hasta pronto!")
        break
    } else {
        alert("La respuesta debe ser si/no")
    }
}