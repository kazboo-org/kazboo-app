import { View, Text, Modal, Alert, Pressable } from "react-native";
import React from "react";
import styles from "./CustomModal.style";

type CustomModalProps = {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  children: any;
  modalTitle: string;
};

const CustomModal: React.FC<CustomModalProps> = ({
  showModal,
  setShowModal,
  children,
  modalTitle,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showModal}
      onRequestClose={() => {
        setShowModal(!showModal);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.modalHeader}>
            <Text style={styles.headerText}>{modalTitle}</Text>
          </View>
          <View style={styles.modalContent}>{children}</View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
