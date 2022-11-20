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
import { useParams } from "react-router";
import ExploreContainer from "../../components/ExploreContainer";
// import './Page.css';

const CustomersList: React.FC = () => {
  const { name } = useParams<{ name: string }>();

    const [clientes, setClientes] = useState<any>([]);

    useEffect(()=>{
        search();
    }, [])

    const search=()=>{
        const datosDeEjemplo=[
            {
                id: '1',
                firstname: 'Juan',
                lastname: 'Valerio Mayta',
                email: 'jvaleriom@gmail.com',
                phone: '960205949',
                address: 'Av. los choclitos',
            },
            {
                id: '2',
                firstname: 'Sancho',
                lastname: 'Pansa',
                email: 'holamundo@gmail.com',
                phone: '952200029',
                address: 'Av. los condoritos',
            },
        ];
        setClientes(datosDeEjemplo);
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
              <IonButton color="primary" fill="solid" slot="end" size="default">
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
                  <IonCol>{cliente.firstname + ' ' + cliente.lastname}</IonCol>
                  <IonCol>{cliente.email}</IonCol>
                  <IonCol>{cliente.phone}</IonCol>
                  <IonCol>{cliente.address}</IonCol>
                  <IonCol>
                    <IonButton color="primary" fill="clear">
                      <IonIcon icon={pencil} slot="icon-only"></IonIcon>
                    </IonButton>
                    <IonButton color="danger" fill="clear">
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
