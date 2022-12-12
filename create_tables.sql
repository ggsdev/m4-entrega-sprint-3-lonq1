create extension if not exists "uuid-ossp";

create table if not exists categories(
	id bigserial primary key,
	name varchar(200) not null unique
);

create table if not exists products(
	id uuid primary key default uuid_generate_v4(),
	name varchar(200) not null,
	price decimal(8,2) not null,
	category_id integer,
	foreign key (category_id) references categories(id) on delete cascade
)