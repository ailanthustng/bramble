import uuid
from datetime import datetime
from collections import namedtuple


ApiKey = namedtuple("Apikey", ("api_key", "app", "created_at", "user_uuid"))

data = [
    ("F1xAkpVglk7hpM3Q4Vx7zQ", "foo", "2020-10-20 12:05:09", "87523c58-f40c-456a-a46d-b76fff216cdb"),
    ("k27dhPVGgMwFIuDZpUKmCg", "bar", "2020-08-12 22:44:12", "87523c58-f40c-456a-a46d-b76fff216cdb"),
    ("3ongbPHY22vvNQTLz3ylqw", "baz", "2020-10-01 21:26:57", "87523c58-f40c-456a-a46d-b76fff216cdb"),
    ("OuBL0rXtrdJBUyB7xLm4dg", "foo", "2020-09-03 19:49:27", "e4165ff1-bda1-4fbd-a0a7-7c88b4713591"),
    ("7HSAnrlDU3Z7CfTCKedCqA", "foo", "2020-10-07 04:20:56", "c99572fd-e3d5-4239-b750-2d540ef540e0"),
    ("Zp6h54vLtkkQ9UdMm1g8Lw", "baz", "2021-04-21 08:22:42", "e4165ff1-bda1-4fbd-a0a7-7c88b4713591"),
    ("NcNzaJa-J3Hqud_KnaKSSw", "foo", "2020-10-02 04:46:43", "ce04b536-f4f7-47a6-8f79-51969fd66851"),
    ("3rSqc452tBEPpDPh9ft8dA", "bar", "2020-09-01 20:57:21", "ce04b536-f4f7-47a6-8f79-51969fd66851"),
    ("-Piv8hRhDBtCeA20Z3LDmg", "foo", "2021-01-28 03:12:14", "787b8a04-2651-4cf0-873c-de86ac0d5867"),
    ("uRDy7OkMELA0ly_7BWY7xQ", "bar", "2021-02-12 00:48:37", "27a53581-f09a-4a07-97a2-3454342f7ccb"),
]

db = {
    d[0]: ApiKey(
        d[0],
        d[1],
        datetime.strptime(d[2], "%Y-%m-%d %H:%M:%S"),
        uuid.UUID(d[3])
    ) for d in data
}

def _dict(row):
    return dict(
        api_key=row.api_key,
        app=row.app,
        created_at=row.created_at,
        user_uuid=row.user_uuid,
    )


def create(user_uuid, api_key, app):
    assert api_key not in db

    row = ApiKey(api_key, app, datetime.now(), user_uuid)
    db[api_key] = row

    return _dict(row)


def list_by_user(user_uuid):
    return [_dict(v) for k, v in db.items() if v.user_uuid == user_uuid]


def delete(api_key):
    del db[api_key]
