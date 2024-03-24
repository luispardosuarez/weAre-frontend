import axios from 'axios';

const API_URL = 'http://localhost:8080/api/solicitudes/';

class SolicitudService {
  static getAllSolicitudes() {
    return axios.get(API_URL);
  }

  static getSolicitudById(id) {
    return axios.get(API_URL + id);
  }

  // Implementa métodos para crear, actualizar y eliminar solicitudes según sea necesario.
}

export default SolicitudService;