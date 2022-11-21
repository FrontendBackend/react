import {
  IonButton,
  IonButtons,
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonMenuButton,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { add, close, pencil, search } from "ionicons/icons";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import ExploreContainer from "../../components/ExploreContainer";
import { removeCustomer, searchCustomers } from "./CustomerApi";
// import './Page.css';

const CustomersList: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  const [clientes, setClientes] = useState<any>([]);
  const history = useHistory();

  useEffect(() => {
    search();
  }, []);

  const search = () => {
    let result = searchCustomers();
    setClientes(result);
  };
  
  const remove = (id: string) => {
    removeCustomer(id);
    search();
  };

  const addCustomer = () => {
    history.push('/page/customer/new')
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <IonCard>
            <IonTitle>Gestión de clientes</IonTitle>

            <IonItem>
              <IonButton onClick={addCustomer} color="primary" fill="solid" slot="end" size="default">
                <IonIcon icon={add}></IonIcon>
                Agregar cliente
              </IonButton>
            </IonItem>

            <IonGrid className="table">
              <IonRow>
                <IonCol>Nombre</IonCol>
                <IonCol>Email</IonCol>
                <IonCol>Teléfono</IonCol>
                <IonCol>Dirección</IonCol>
                <IonCol>Acciones</IonCol>
              </IonRow>

              {clientes.map((cliente: any) => (
                <IonRow>
                  <IonCol>{cliente.firstname + " " + cliente.lastname}</IonCol>
                  <IonCol>{cliente.email}</IonCol>
                  <IonCol>{cliente.phone}</IonCol>
                  <IonCol>{cliente.address}</IonCol>
                  <IonCol>
                    <IonButton color="primary" fill="clear">
                      <IonIcon icon={pencil} slot="icon-only"></IonIcon>
                    </IonButton>
                    <IonButton color="danger" fill="clear" onClick={()=>remove(cliente.id)}>
                      <IonIcon icon={close} slot="icon-only"></IonIcon>
                    </IonButton>
                  </IonCol>
                </IonRow>
              ))}
            </IonGrid>
          </IonCard>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default CustomersList;
