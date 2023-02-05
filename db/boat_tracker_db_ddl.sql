
CREATE EXTENSION IF NOT EXISTS "uuid-ossp"; 

-- Table: public.fishing_boats

CREATE TABLE IF NOT EXISTS public.fishing_boats
(
    id uuid NOT NULL DEFAULT uuid_generate_v4(),
    registration_number character varying(40) COLLATE pg_catalog."default",
    vessel_name character varying(40) COLLATE pg_catalog."default",
    port_registration character varying(40) COLLATE pg_catalog."default",
    guide_id uuid,
    status character varying(40) COLLATE pg_catalog."default",
    created_datetime timestamp without time zone NOT NULL DEFAULT now(),
    updated_datetime timestamp without time zone NOT NULL DEFAULT now(),
    CONSTRAINT delivery_trucks_pkey PRIMARY KEY (id)
);


ALTER TABLE public.fishing_boats
    OWNER to postgres;
