package flyweight;

class MainClass {

    public static void main(String[] args) {
        Pool pool = new Pool();
        pool.getEmployeeInstanceFromPool(0, "tanaka");
        pool.getEmployeeInstanceFromPool(0, "ootuka");
        pool.getEmployeeInstanceFromPool(1, "suzuki");
        pool.getEmployeeInstanceFromPool(1, "ashihara");
        pool.getEmployeeInstanceFromPool(2, "yamashita");
        pool.getEmployeeInstanceFromPool(2, "taniguchi");
    }

}

class Employee {

    String name;
    /* 企画 = 0 | 営業 = 1 | 技術 = 2 */
    int positionNumber;

    Employee(int positionNumber) {
        /* positionNumberだけ値を渡し、nameには渡さない。 */
        this.positionNumber = positionNumber;
    }

}

/* Employeeインスタンスを保存するためのクラス */
class Pool {

    Employee[] employees = new Employee[3];

    /* 各役職ごとに最初に作成したインスタンスを使い回す(nameメンバだけ変更する) */
    Employee getEmployeeInstanceFromPool(int positionNumber, String name) {

        Employee ins;

        /* 配列の各要素の初期値は全てnull */
        /* Number型のインデックスで配列を検索することはできない */
        if (this.employees[positionNumber] == null) {
            ins = new Employee(positionNumber);
            this.employees[positionNumber] = ins;
            /* intはtoString()できない */
            System.out.println("職種番号" + String.valueOf(positionNumber) + "のインスタンスを作成しました");
        } else {
            ins = this.employees[positionNumber];
            System.out.println("職種番号" + String.valueOf(positionNumber) + "のインスタンスは既に存在します");
        }

        ins.name = name;
        System.out.println(ins.name);
        return ins;

    }

}
