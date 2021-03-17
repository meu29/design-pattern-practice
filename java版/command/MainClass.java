package java版.command;

class MainClass {

    public static void main(String[] args) {

        Service service = new Service();

        ServiceRequest request = new ServiceRequest1();
        request.setService(service);
        request.run();

        ServiceRequest request2 = new ServiceRequest2();
        request2.setService(service);
        request2.run();

    }

}

class Service {

    void useServiceA() {
        System.out.println("using serviceA");
    }

    void useServiceB() {
        System.out.println("using serviceB");
    }

    void useServiceC() {
        System.out.println("using serviceC");
    }

}

abstract class ServiceRequest {

    Service service;

    void setService(Service service) {
        this.service = service;
    }

    abstract void run();

}

/* 実行するメソッドの組み合わせごとにクラスを作っておく */

/* サービスA -> Bの順に実行するパターン */
class ServiceRequest1 extends ServiceRequest {

    void run() {
        service.useServiceA();
        service.useServiceB();
    }    

}

/* サービスC -> A -> Bの順に実行するパターン */
class ServiceRequest2 extends ServiceRequest {

    void run() {
        service.useServiceC();
        service.useServiceA();
        service.useServiceB();
    }    

}