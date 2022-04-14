import { Column, Entity } from "typeorm";

@Entity("question", { schema: "test_db" })
export class Question {
  @Column("int", { primary: true, name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 255 })
  name: string;
}
