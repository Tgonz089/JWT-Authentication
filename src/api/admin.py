  
import os
from flask_admin import Admin
from .models import db, User
from flask_admin.contrib.sqla import ModelView
from wtforms.fields import PasswordField

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='4Geeks Admin', template_mode='bootstrap3')

    
    # Add your models here, for example this is how we add a the User model to the admin
    admin.add_view(ModelView(User, db.session))

    # You can duplicate that line to add mew models
    # admin.add_view(ModelView(YourModelName, db.session))
class UserView(ModelView):
    column_list = ['email', 'is_active']
    column_editable_list = ['is_active',]
    column_exclude_list = ['_password', ]
    create_modal = True
    edit_modal = True
    form_extra_fields = {
        'password': PasswordField('password')
    }