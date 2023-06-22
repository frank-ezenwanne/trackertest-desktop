from django.db import models

from django.contrib.auth.models import (
    BaseUserManager, AbstractBaseUser,PermissionsMixin
)

from django.utils import timezone
from django.core.mail import send_mail
import uuid


class CustomUserManager(BaseUserManager):

    use_in_migrations = True
    def create_user(self, email, password=None,is_superuser=False,**extra_fields):
        if not email:
            raise ValueError('Users must have an email address')

        user = self.model(
            email=self.normalize_email(email),
        )

        user.set_password(password)
        user.save(using=self._db)
        return user


    def create_superuser(self, email, password=None,**extra_fields):
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_admin', True)
 

        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        if extra_fields.get('is_admin') is not True:
            raise ValueError('Superuser must have is_admin=True.')

        user = self.create_user(
            email,
            password=password,
            **extra_fields
        )
     
        user.save(using=self._db)
        return user


class CustomUser(AbstractBaseUser,PermissionsMixin):

    email = models.EmailField(
        verbose_name='email address',
        max_length=255,
        unique=True,
    )
    inactive_email = models.EmailField(null=True,blank=True)
    token = models.CharField(null=True, blank=True,max_length=10)
    is_active = models.BooleanField(default=True)
    user_active = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)
    date_joined = models.DateTimeField(default=timezone.now)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    # REQUIRED_FIELDS = ['email']


    def email_user(self, subject, message, from_email=None, **kwargs):
        send_mail(subject, message, from_email, [self.email], **kwargs)

    def set_token(self):
        token = uuid.uuid4().hex[:8]
        self.token = token
        self.save()

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return True

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True

    @property
    def is_staff(self):
        "Is the user a member of staff?"
        return self.is_admin
