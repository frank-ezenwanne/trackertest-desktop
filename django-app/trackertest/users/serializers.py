from django.contrib.auth.models import User
from rest_framework import serializers
from django.contrib.auth import authenticate
from django.conf import settings
from .models import CustomUser

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('email')


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('password','email',)
        extra_kwargs = {'password':{'write_only':True}}

    def create(self,validated_data):
        user = CustomUser.objects.create_user(password=validated_data["password"],
            email=validated_data["email"],
        )
        return user


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def validate(self,data):
        print(data)
        user = authenticate(**data)
        print(user)
        if user and user.user_active:
            return user,'active'
        elif user and user.user_active == False:
            return user,'inactive'
        raise serializers.ValidationError("Incorrect credentials")


class VerifyTokenSerializer(serializers.Serializer):
    token = serializers.CharField()
    email = serializers.EmailField()

class ChangeEmailSerializer(serializers.Serializer):
    old_email = serializers.EmailField()
    new_email = serializers.EmailField()
    password = serializers.CharField()

class EmailSerializer(serializers.Serializer):
    email = serializers.EmailField()

class PasswordSerializer(serializers.Serializer):
    password = serializers.CharField()

class ErrorSerializer(serializers.Serializer):
    error = serializers.CharField()
    errorInfo = serializers.CharField()