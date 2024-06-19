// components/TicketModal.tsx

import React from "react";
import {
  Modal,
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Ticket } from "../types/types"; // Asegúrate de tener el tipo Ticket definido

const { width, height } = Dimensions.get("window");

interface TicketModalProps {
  ticket: Ticket | null;
  visible: boolean;
  onClose: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

const TicketModal: React.FC<TicketModalProps> = ({
  ticket,
  visible,
  onClose,
  onEdit,
  onDelete,
}) => {
  if (!ticket) return null;

  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
      transparent
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>{ticket.descripcion}</Text>
          <Text>Status: {ticket.status}</Text>
          {ticket.Usuario && (
            <Text>
              Usuario: {ticket.Usuario.nombre} {ticket.Usuario.apellidos}
            </Text>
          )}
          {ticket.Dispositivo && (
            <Text>Dispositivo: {ticket.Dispositivo.nombre}</Text>
          )}
          <View style={styles.buttonContainer}>
            <Button title="Cerrar" onPress={onClose} />
            <Button title="Editar" onPress={onEdit} />
            <Button title="Eliminar" onPress={onDelete} color="red" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: width * 0.8, // 80% del ancho de la pantalla
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
    color: "#333",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 16,
  },
});

export default TicketModal;
