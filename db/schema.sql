create database Projeto_Knex;

create table if not exists usuarios(
    id serial primary key,
    nome varchar not null,
    email varchar not null unique,
    senha text not null,
);
create table if not exists produtos(
    id serial primary key,
    nome varchar not null,
    bar_code text not null unique,
    quantidade integer not null,
);
create table if not exists caixa(
    id serial primary key,
    id_usuario integer not null,
    id_produto integer not null,
    quantidade_produto integer not null,
    foreign key (id_usuario) references usuarios (id),
    foreign key (id_produto) references produtos (id)
);