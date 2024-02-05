import { View, Text, Modal, ImageBackground } from "react-native";
import React from "react";
import styles from "./CustomModal.style";
import { BlurView } from "expo-blur";

type CustomModalProps = {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  children: any;
};

const CustomModal: React.FC<CustomModalProps> = ({
  showModal,
  setShowModal,
  children,
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
      <BlurView intensity={10} style={styles.centeredView}>
        <View style={styles.modalView}>{children}</View>
      </BlurView>
    </Modal>
  );
};

export default CustomModal;
