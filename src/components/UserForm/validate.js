import {searchByDocument} from '../../redux/actions/actionIndex'


export default function validateAccount({ email, nombre, numDocumento, direccion, telephone, }) {
    const isBlankSpace = new RegExp("^\\s+$")
    const isPhoneNumber = /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}/
    const onlyAlphabet = /[\p{L}-]+/u;
    const isMail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const isDNI = /^[0-9]{6,10}$/ 
    const error = {}

    if (!email || isBlankSpace.test(email) || !isMail.test(email)) error.email = 'coloque un mail valido'

    if (!nombre || isBlankSpace.test(nombre)) error.nombre = 'Indique su nombre'
    else if (!onlyAlphabet.test(nombre)) error.nombre = 'No se aceptan números'
    else if (nombre.trim().length > 50) error.nombre = `Maximo número de caracteres: 50 (${nombre.trim().length}/50)`

    if (!numDocumento || isBlankSpace.test(numDocumento)) error.numDocumento = 'Ingrese su n° de documento'
    else if (!isDNI.test(numDocumento)) error.numDocumento = 'Ingrese un documento valido'

    if (!telephone || isBlankSpace.test(telephone)) error.telephone = 'Agrege un número telefonico'
    else if (!isPhoneNumber.test(telephone)) error.telephone = 'Agrege un número telefonico valido'

    return error

}