


export default function validateAccount({ email, nombre, numDocumento, direccion, telephone, }) {
    const isBlankSpace = new RegExp("^\\s+$")
    const isPhoneNumber = /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}/
    const onlyAlphabet = /[\p{L}-]+/u;
    const isBirthday = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;

    const error = {}

    if (!email || isBlankSpace.test(email)) error.email = 'coloque un mail valido'

    if (!nombre || isBlankSpace.test(nombre)) error.nombre = 'Indique su nombre'
    else if (!onlyAlphabet.test(nombre)) error.nombre = 'No se aceptan números'
    else if (nombre.trim().length > 15) error.nombre = `Maximo número de caracteres: 15 (${nombre.trim().length}/15)`

    if (!numDocumento || isBlankSpace.test(numDocumento)) error.numDocumento = 'Insert your phone number'
    else if (!isPhoneNumber.test(numDocumento)) error.numDocumento = 'Insert a valid phone number'

    if (!telephone || isBlankSpace.test(telephone)) error.telephone = 'Insert your phone number'
    else if (!isPhoneNumber.test(telephone)) error.telephone = 'Insert a valid phone number'

    return error

}