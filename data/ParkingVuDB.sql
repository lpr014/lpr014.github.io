/* This is the file that can be used to set up the database in SQL */


/* Entity Tables */

/* Events table setup */
create table Events(
    EventID varchar(10) not null,
    EventName varchar(45),
    EventAddress varchar(45),
    City varchar(45),
    EventState varchar(2),
    EventDate datetime,
    primary key(EventID)
);
/* Lots table setup */
create table Lots(
    LotID varchar(10) not null,
    LotName varchar(45),
    LotAddress varchar(45),
    City varchar(45),
    primary key(LotID)
);
/* Users table setup */
create table Users(
    UserID varchar(45) not null,
    FullName varchar(45),
    GivenName varchar(45),
    FamilyName varchar(45),
    Email varchar(45),
    IDToken varchar(255),
    primary key(UserID)
);
/* Trollies table setup */
create table Trollies(
    VehID varchar(10) not null,
    GPSLoc varchar(45),
    primary key(VehID)
);


/** Relation Tables 
* These are a few of the relationships that will 
* be needed as the project progresses.
*/

/* Table to keep track of who created which event */
create table Creates(
    UserID varchar(10) not null,
    EventID varchar(10) not null,
    CreateTime datetime,
    primary key(UserID, EventID)
);
/* Table to keep track of who drove each trolley */
create table Drives(
    UserID varchar(10) not null,
    VehID varchar(10) not null,
    StartTime datetime,
    EndTime datetime,
    primary key(UserID, VehID)
);
/* Table to keep track of who listed each lot */
create table Lists(
    UserID varchar(10) not null,
    LotID varchar(10) not null,
    CreateTime datetime,
    primary key(UserID, LotID)
);