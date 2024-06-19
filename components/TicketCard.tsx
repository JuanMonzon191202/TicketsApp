// components/TicketCard.tsx

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ticket } from "../types/types"; // Asegúrate de tener el tipo Ticket definido

interface TicketCardProps {
  ticket: Ticket;
  onPress: () => void; // Función para manejar el evento de presionar el ticket
}

const TicketCard: React.FC<TicketCardProps> = ({ ticket, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Text style={styles.title}>{ticket.descripcion}</Text>
      <Text>Status: {ticket.status}</Text>
      {ticket.Usuario && (
        <Text>
          Usuario: {ticket.Usuario.nombre} {ticket.Usuario.apellidos}
        </Text>
      )}
      {ticket.Dispositivo && (
        <Text>Dispositivo: {ticket.Dispositivo.nombre}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
});

export default TicketCard;
