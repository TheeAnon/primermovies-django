from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin


class UserAccountManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("Email address cannot be blank")

        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save()

        return user


class UserAccount(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=30, default='')
    is_active = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)

    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name']

    def get_name(self):
        return self.first_name

    def __str__(self):
        return self.email


class Movies():
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    genre = models.CharField(max_length=255)
    length = models.TimeField()
    length = models.CharField(max_length=255)


class Series():
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    genre = models.CharField(max_length=255)
    episodes = models.TimeField()
    length = models.CharField(max_length=255)


class Anime():
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    genre = models.CharField(max_length=255)
    episodes = models.TimeField()
    length = models.CharField(max_length=255)


class Likes():
    item = models.CharField(max_length=255)
    item_id = models.CharField(max_length=255)
    user = models.CharField(max_length=255)
    timestamp = models.DateTimeField()


class Dislikes():
    item = models.CharField(max_length=255)
    item_id = models.CharField(max_length=255)
    user = models.CharField(max_length=255)
    timestamp = models.DateTimeField()


class Rating():
    item = models.CharField(max_length=255)
    item_id = models.CharField(max_length=255)
    user = models.CharField(max_length=255)
    timestamp = models.DateTimeField()


class Watchlist():
    item = models.CharField(max_length=255)
    item_id = models.CharField(max_length=255)
    user = models.CharField(max_length=255)
    timestamp = models.DateTimeField()


class Requests():
    item = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    user = models.CharField(max_length=255)
    timestamp = models.DateTimeField()


class Notifications():
    user = models.CharField(max_length=255)
    notification = models.CharField(max_length=255)
    sender = models.CharField(max_length=255)
    sender = models.CharField(max_length=255)
    read = models.BooleanField(default=False)
    timestamp = models.DateTimeField()
