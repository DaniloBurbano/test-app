import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity({ tableName: 'movies' })
export class Movie {
  @PrimaryKey()
  id!: number;

  @Property()
  title!: string;

  @Property()
  genre!: string;

  @Property()
  release_date!: any;
  
  @Property()
  rating!: any;

  @Property()
  duration!: number;
}